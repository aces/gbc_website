# Global Brain Consortium Website

This repository contains the development and distribution code for the Global Brain Consortium website.

## Quick Guide to Adding Content

This section will detail how to add content to the website. For more detailed information, please read the [Content Management](#content-management) section of this README.

### Request to Become a Contributor

The quickest way to add content is to be added as a contributor to the repo. You can email derek.lo@mcin.ca to request this.

### Clone or Fork the Repository

The next step is to clone or fork the repository so that you can make changes locally. To do this, please read the documentation on [cloning](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) or [forking](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

If you would like to preview your changes locally, please follow these steps on ["running locally"](#running-locally).

### Add a News or Event Item

After cloning or forking the repository, go to your local drive and change the directory to the repository. Follow these steps to add a News or Event item:

1) From the root directory, go to the `src/resources` folder
2) Duplicate an existing `.njk` file and rename it using the following naming convention: `(yyyy)(mm)(dd)-name.njk`
3) Place an image for the item in the following folder: `src/assets/images/content/news`
4) Edit the content of the new `.njk` by changing the following fields:
    - title: `'item title'`
    - date: `yyyy-mm-dd`
    - type: `resource` or `external` or `youtube` or `pdf` or `register`
        - see [type explanation](#type) for more details
    - image: `"/assets/images/content/news/(filename)"`
    - resource_link: `"(link to the resource. this is optional)"`
    - excerpt: `A brief description of the item in plain text with no special characters like colons or asteriks`
5) Save your file
6) Create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to `main` branch

You can see an example of how the cards look by going to the [News & Events](https://3design.github.io/gbc/resources/0/) page.

### Adding Newsletters to the News and Events

Similar to [above](#add-a-news-or-event-item), adding a card for the Newsletters requires a few different steps:

1) Duplicate an existing `.njk` file in the 'resources' folder.
2) Change the name of the `.njk` file using the following naming convention: `(yyyy)(mm)(dd)-name.njk`
3) Put the PDF in the folder `"src/assets/images/content/newsletters/"`
4) Edit the content of the `.njk` file as [above](#add-a-news-or-event-item) with the following differences: 
    - type: `resource`
    - resource_link: `"/assets/images/content/newsletters/(filename).pdf"`
5) Save your file
6) Create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to `main` branch

### Add a Person to the Network

The network page contains all the members of the Global Brain Consortium. To add a member, please follow these steps:

1) Place an image of the member in the following folder: `src/assets/images/people`. The aspect ratio of the image should be square
2) From the root directory, go to the `src/raw-data` folder
3) Open `people.tsv` with your favorite editor (.tsv stands for Tab-Separated Values)
4) In the field labelled `slug` type in the value `(first name)-(last name)`
5) In the field labelled `name` type in the member's name
6) In the field labelled `image` type in the url as follows `/assets/images/people/(filename)`
7) In the field labelled `affiliation` type in the member's affiliation, preferably a short version
8) In the field labelled `steeringGroupMember` type in `FALSE` unless the member is part of the Steering Committee, in which case enter `TRUE`
9) In the field labelled `expertiseTags` copy the fields from another entry and paste it here. The tag filter is not currently active on this page.
10) In the field labelled `website` enter the url for the member's website (optional)
11) Save the `people.tsv` file
12) Create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to `main` branch


---

## Content Management

Most maintenance of this site will involve adding small pieces of content with standard format (such as new resource listings or new network members). This is achieved using a standard process of making commits to the remote git repository. If you are not familiar with git and GitHub, [this introduction](https://docs.github.com/en/get-started/quickstart/hello-world) may be useful.

If there is only one developer maintaining the site at any given time, adding small amounts of new content to the site typically consists of three steps: adding the content to your local copy of the site (see ["Running Locally"](#running-locally) below); committing the changes locally to the `main` branch; and pushing those changes to the remote repository.

If multiple developers are simultaneously adding content, or if substantial amounts of new content or changes to the site structure are required, any changes should be committed to a local development branch separate from `main`. A [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) should then be opened and reviewed by site developers before these changes are merged into the `main` branch.

### Adding People to the Network

Data for a new member can be added to the network section of the website by editing the `src/raw_data/people.tsv` file. This file is a standard tab-separated value file which can be opened and edited in any spreadsheet software. To add a new person to the file:

0) Always start by ensuring that you have the most recent version of the website code by running `git pull`. This will overwrite any changes to local files, so make sure you run this command _before_ adding any new content (and don't run it again until you have committed any changes!)
1) Open the file in your preferred spreadsheet software
2) Insert the data for the new person on a new row under each corresponding header, and save the file.
    - If you need to add several new people, their data can be added on new rows all at once. No need to complete all of these steps per individual. The expertiseTags field must have data even though they are hidden on the website. It is recommended to copy/paste an entry from an existing person.
3) Test that the site builds correctly in your local environment (see ["Running Locally"](#running-locally))
    - This will automatically generate and overwrite `src/_data/people.json`, which will show up as a change in your local git repository.
4) Check that the newly added person is visible on the network page of the locally-running site.
5) If the person has been added successfully, commit your changes to the `people.tsv` and `people.json` files to your local master branch.
6) Push your local main branch to the remote.

These instructions assume a single developer is maintaining the site. If multiple developers are maintaining the site, use the `pull` request process outlined previously.

### Adding Partners to the Network
Data for a new partner can be added by editing the `src/raw_data/partners.tsv` file. See "Adding new people" above.

### Adding News and Events to the Site

News & Events are links to information distributed by the collaboration. These are stored as `.njk` files in the `src/resources/` directory. To add a new resource, copy one of the existing files and give it a new name appropriate for the resource content being added. You can then open the file to change its content, committing the changes as described [above](#adding-people-to-the-network):

#### `title`
A short title for the resource, which will be displayed on the resources page.

#### `date`
A date for the resource (e.g. publication date) in `yyyy-mm-dd` format

#### `type`
There are four types of posts:
- resource | Use this type to indicate a link that goes to another page or content that is located on this website. The label is `Read More`
- external | Use this type to indicate a link that goes to an external web address. The label is `Go To Link`
- youtube | Use this type to indicate a link goes to youtube. The label is `View on YouTube`
- pdf | Use this type to indicate a link opens a pdf in the browser. The label is `Open PDF`
- register | Use this type to indicate a link that goes to a registration site. The label is `Register to Attend`

#### `image`
An optional filepath pointing to an image file to be displayed with the resource. This can be replaced with "" (empty opening and closing quotes) if no image is needed. Otherwise it should be a filepath starting with `/assets/images/content/(folder name)`. Ensure that you copy the image into this directory so that it will be added to the website.

#### `resource_link`: 
An optional URL enclosed in quotation marks, linking to the resource at another location on the web.

e.g.:
`resource_link:"https://osf.io/6khrv/"`

#### `excerpt`
A short description of the resource which will be displayed as text on the resources page. This must be written on a single line.

### Expertise Tags

A list of expertise tags that members can choose from is stored in `src/_data/expertiseTags.json`. They are stored in the "tags" property as string entries in a list. To add a new expertise tag, just add a new string to the list. As mentioned above, this feature is not currently in use. Please just copy the expertise from a previous entry.

### Other Content

In the current version of the website, most other content is hard-coded into the HTML or `.njk` template files. You can edit this content by editing these files in the `src` directory. Note that all content in the `dist` directory is automatically generated and changes will be overwritten when the site is built.

## Running, Building, and Deploying
### Running Locally
To run a local version of the website for development purposes:

1) Install the prerequisite dependencies:
    - [git](https://git-scm.com/)
    - [node (version 20.9.0)](https://nodejs.org/en)
2) [Clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your local computer
3) In a terminal, `cd` into the root directory of the cloned repo
4) Run `npm install` to install the dependencies required to build the website
5) Run `npm start` to serve the website locally (by default, it will be served on [localhost:8080](http://localhost:8080))

### Building and Deploying
The public version of the website will be built and deployed automatically when a commit is made to the `main` branch of this repository. To run the build script locally, follow the instructions in ["Running Locally"](#running-locally), replacing the final step with the command `npm build`.
