Please follow these installation instructions step by step:

1. npm uninstall -g webpack
2. npm uninstall -g @angular/cli
3. npm install -g @angular/cli
4. git clone https://github.com/PetrHoufek/test-angular.git
5. cd test-angular
6. delete package-lock file
7. npm i --save-dev webpack
8. npm install
9. ng serve --open

![alt text](https://github.com/PetrHoufek/test-angular/blob/master/intro1.jpg)
![alt text](https://github.com/PetrHoufek/test-angular/blob/master/intro2.jpg)



Angular Developer Test
======================
The Business of Fashion uses various tests to assess whether a candidate is best suited to the expectations of the role advertised and the offer given.

This test aims to demonstrate your technical skills in practice: that you can deliver a solution which implements a scalable front-end architecture, which is easy to use, and that pays attention to the requirement details.

Instructions & Deliverables
---------------------------

1. Fork this repository to your account (https://help.github.com/articles/fork-a-repo/)
2. Read these instructions carefully first before continuing with the practical test
3. Read the Requirements / Story Definition and Conditions of Acceptance
4. Identify and write at least 5 test cases (no code necessary; Gherkin or a written list will suffice)
    - Demonstrate your understanding of the Conditions of Acceptance
    - Identify any appropriate edge cases
5. Implement the Story's functionality using the files in 'public' directory
    - Develop a solution which demonstrates your skills and strengths
    - You may add/change/modify any files in the project
    - You may use Google or any other references for angular/bootstrap syntax
6. Describe how you can build a better "Product" for this coding task in SOLUTION.md and include your estimates
7. Create a pull request to origin repository when you are satisfied with your solution (https://help.github.com/articles/about-pull-requests/) 


Other Notes
-----------

- This test uses Angular 5 and Bootstrap 4.
- Please remember to demonstrate your skills and how you would normally approach feature development.
- Please time yourself so that you balance Quality and Delivery. There will be no deadline for this exercise, but you should instead estimate the task, complete the task, and measure your elapsed time. Please submit your estimate and actual time with your code solution
- Solution should be fully working when we check out your code.
- Please make sure any additional dependencies are added in package.json.
- API docs are available here: (https://github.com/bof-ci/test-angular/blob/master/API_DOCS.md)


Requirements / Story Definitions
================================

### Technical requirements:

Develop a SPA app (single page app), where profiles are retrieved from the API and where filters can be used to limit the results from the API. Each profile can be edited on a seperate page. 

### Product Requirements:

TASK 1:

As a BoF editor I want to list and filter person profiles

``` gherkin
WHEN I visit the homepage
THEN I expect to see filters sidebar
AND I expect to see a table of profiles
AND I expect to see "10" profiles in a table
AND I expect to see profiles pagination

WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I search for "Japan" in filters sidebar
THEN I expect to see he following profiles in the profiles table:
    | Masamichi Katayama    |
    | Rei Kawakubo          |


WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I filter by "Enabled" "No" in the sidebar
THEN I expect to see he following profiles in the profiles table:
    | Linda Fargo       |
    | Jefferson Hack    |
    | James Jebbia      |

WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I filter by "Enabled" "No" in the sidebar
AND  I filter by "Visible" "No" in the sidebar
THEN I expect to see he following profiles in the profiles table:
    | Jefferson Hack    |

```

TASK 2:

As a BoF editor I want to edit a person's profile

``` gherkin
WHEN I visit the homepage
THEN I expect to see a table of profiles
WHEN I click on a profile row
THEN I expect to see profile edit page

WHEN I visit profile edit page
THEN I expect profile data to be pre-filled
WHEN I change data and click save
THEN I expect the data to be saved

WHEN I visit profile edit page
THEN I expect profile data to be pre-filled
AND  I expect to see profile thumbnail
AND  I expect to see profile assets
WHEN I click on a profile asset
THEN I profile thumbnail is updated
AND  I expect the data to be saved

```

Technical Setup
===============

You will need to have node and npm installed. This test was verified to work on Node v8.1.4.

On the command prompt, run:
```
    $> npm install
    $> npm start
```

Visit the page in http://localhost:4200
Profile API can be reached at http://localhost:3000


