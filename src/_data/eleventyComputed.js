const EleventyFetch = require("@11ty/eleventy-fetch");

function countAffiliations(people){
    a = new Set()
    for (const p of people) {
        a.add(p.affiliation)
    }
    return a.size
}

function countExpertiseTags(people){
    a = new Set()
    for (const p of people) {
        for (const ex of p.expertiseTags.split(",")){
            a.add(ex.trim())
        }
    }
    return a.size
}

function getExpertiseTagsList(people){
    a = new Set()
    for (const p of people) {
        for (const ex of p.expertiseTags.split(",")){
            a.add(ex.trim())
        }
    }
    const tagArray = Array.from(a);
    tagArray.sort();
    return tagArray
}

function countsteeringGroupMemberPapers(people){
    orcidIDs = new Set()
    for (const p of people) {
        if (p.steeringGroupMember){
            if (p.orcid !== ""){
                orcidIDs.add(p.orcid)
            }
        }
    }

    crossrefQueryString = "https://api.crossref.org/works?filter="
    for (const id of orcidIDs){
        crossrefQueryString += `orcid:${id},`
    }
    
    return EleventyFetch(crossrefQueryString, {
        duration: "1d", // save for 1 day
        type: "json",   // we’ll parse JSON for you
        directory: ".cache"
      });
}

module.exports = {
    eleventyComputed: {
      currentYear: data => (new Date()).getFullYear(),
      peopleAffiliationsCount: data => countAffiliations(data.people),
      peopleExpertiseCount: data => countExpertiseTags(data.people),
      //steeringGroupMemberPaperCount: data => countsteeringGroupMemberPapers(data.people),
      expertiseTagsList: data => getExpertiseTagsList(data.people),
    }
  };