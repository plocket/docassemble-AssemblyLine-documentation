---
id: automated_testing
title: Automated testing
sidebar_label: Automated testing
slug: /automated_integrated_testing
---

<!-- original: https://docs.google.com/document/d/1hkNr78mrU3Ha98tPUL4OKWi3eNnt-1Sba7L8470u06g/edit# -->

🚧 Reference for writing automated integrated tests with the Assembly Line testing framework.

## Intro

The Kiln (Assembly Line Kiln) framework runs tests on your docassemble interview through GitHub, making sure your interviews are running the way you want.

**Kiln works with any docassemble interview**, though it was developed through the Document Assembly Line project.

Docacon 2021, 10 minute intro presentation:

<!-- &amp;end=4115 -->

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YB-e-MGtLgI?&amp;start=3482" title="10 minute intro of Assembly Line Kiln testing framework at Docacon 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


1. Set up your repository or organization for testing using https://apps-dev.suffolklitlab.org/start/test-setup. Follow the instructions there to add new code to your repository.
1. In Docassemble, make a new Project and pull in the updated code.
1. Write tests in your Sources folder. The setup process will give you an example test to start you off.

Whenever you push to GitHub, GitHub will run the tests automatically with a bot that goes to whatever interviews you named in the tests and fills in the fields. You can see the tests running in your [GitHub Actions tab](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity).

At the end, you can see a report right in the GitHub Action or [download the report artifact to your computer](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts).

<!-- ## Setup

For now, talk to us about it.

- Have admin permissions on the repo
- Use the setup interview (https://apps-dev.suffolklitlab.org/start/test-setup/)
- Add this element to the page somewhere: <div data-variable="${ encode_name(str( user_info().variable )) }" id="trigger" aria-hidden="true" style="display: none;"></div>

If you run the tests locally, add these environment variables to your `.env` file:

 -` PLAYGROUND_EMAIL`: the docassemble server email for the account that is running the tests.
- `PLAYGROUND_PASSWORD`: the docassemble server password for the account that is running the tests.
- `PLAYGROUND_ID`: the id that shows up in interviews when the testing account runs the tests from the server playground.
-->

## Quick Reference

1. You write and edit `.feature` test files in your Sources folder.
1. By default, each Step or field may only take 2 minutes. You can change that with the "the maximum seconds" Step listed in the Steps.
1. Tests are run in GitHub when you commit.
1. Tests can download PDF files, but humans have to review them to see if they've come out right.
1. Tests that error will create screenshots from when the error happened.
1. Tests create report files you can download. They're in [the Action's artifact section](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts).

For interacting with things on GitHub, look for how to use the [Actions](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity) tab.

Give us feedback and ideas by making issues at https://github.com/plocket/docassemble-cucumber/issues.

### Example

The tests use the [gherkin language and syntax](https://cucumber.io/docs/gherkin/reference/). Here's a complex example for quick reference of some of our features:

```
@children
Feature: The user has children

  @fast @child_benefits
  Scenario: child has benefits
    Given I start the interview at "some_file_name.yml"
    And I get to the question id "benefits" with this data:
      | var | value | trigger |
      | x[i].name.first | Cashmere | children[0].name.first |
      | x[i].name.last | Davis | children[0].name.first |
      | x[i].name.first | Casey | children[1].name.first |
      | x[i].name.last | Davis | children[1].name.first |
      | x.there_are_any | True | children.there_are_any |
      | x.target_number | 2 | children.there_is_another |
    When I set the var "benefits['SSI']" to "True"
    And I tap to continue
    Then the question id should be "download"
    And I download "some_motion.pdf"

```

## First test

You can write a really simple test right away that just makes sure your YAML file runs using the name of the YAML file. Write a `Scenario` for each file you want to test.

```
Feature: Interviews load

  Scenario: The 209A loads
    Given I start the interview at "ma_209a_package.yml"

  Scenario: The Plaintiff's Motion to Modify loads
    Given I start the interview at "plaintiffs_motion_to_modify_209a.yml"
```

More complex tests might wait till your code is pretty much how you want it. Every time you change your variable names, you may have to update the tests.

## Story tables

Very basically, a **story table** contains a list of variables and values. When the test is going through the interview and arrives on a page that has a field that defines the variable, the field will be set with the value. The order in which you list the rows does not matter, which gives a lot more flexibility when developers are changing around the order of questions.

:::tip 
It can be easy to lose track of what variables you've included, so it can be useful keep the rows in alphabetical order.
:::

You can have multiple tables per Scenario and you can put other steps between tables. Remember that each table needs to state the `id` of the `question` where it should stop.

### Story table description

The step that triggers a story table is

```
    And I get to the question id "some id!" with this data:
```

It needs to know the `id` of the page where it will stop. You can find the `id` in the `question` block in the YAML (or using the Sources tab in a live interview). Under that, you put the header row of the table:

```
      | var | value | trigger |
```

This labels the three columns the test will use. Under that, add a row for every field that you want the test to interact with during the interview. Start with a blank row then fill it in:
```
      |  |  |  |
```

### var

In the **var** column, write the name of the variable you want to set **as it appears on question's screen**. Most times you can see that value in the YAML `question` block. Sometimes it will be generated by code in the `question` block. If you're not sure what name some code generates, you may have to ask the folks who wrote the code.

<!-- The Document Assembly Line library has built in questions that use such code.
- `users[i].name_fields()` generates all the name fields with the right index number (NOT 'i'). E.g. `users[0].name.first`, `users[0].name.suffix`, `users[1].name.first`, `users[1].name.suffix`
- `users[i].address_fields()` generates all the address fields with the right index number (NOT 'i'). E.g. `users[0].address.address`, `users[1].address.address` -->

### value

In the **value** column, write what you want the field to be set to. For checkboxes, `True` means 'checked' and `False` means 'unchecked'.


### trigger

In the **trigger** column, write the name of the variable that triggers the page on which the field appears.

For the below, the `trigger` is `users[0].hair.how_much`.

```
---
id: interview order
mandatory: True
code: |
  users[0].hair.how_much
---
id: hair
question: |
  Tell us about your hair
fields:
  - How much hair do you have?: users[i].hair.how_much
  - What color is your hair?: users[i].hair.color
```

The table rows for that would look like this:

```
      | var | value | trigger |
      | users[i].hair.how_much | Enough | users[0].hair.how_much |
      | users[i].hair.color | Sea green | users[0].hair.how_much |
```

Even though the `var` columns were different, both rows had `users[0].hair.how_much` in their `trigger` column. That's because when the docassemble asks for `users[0].hair.how_much`, both fields are on that page and both variables have to be set.


There are some rare cases where no `trigger` exists. For example, `question` blocks with the `mandatory` specifier:

```
mandatory: True
question: |
  Do you like mandatory questions?
yesno: likes_mandatory_questions
```

In those cases, leave the `trigger` column empty. If you're not sure, ask us.

### Story table examples

Simple field types with their values.

The 'yes' choice of [yesno buttons](https://docassemble.org/docs/fields.html#yesno), [yesnoradio](https://docassemble.org/docs/fields.html#fields%20yesno) fields, etc.
```
      | has_hair | True | has_hair |
```

The 'maybe' choice in [yesnomaybe buttons](https://docassemble.org/docs/fields.html#yesnomaybe) and [datatype: yesnomaybe](https://docassemble.org/docs/fields.html#fields%20yesno) fields.
```
      | has_hair | None | has_hair |
```

Checkboxes with multiple choices. The value 'True' means to check the checkbox and 'False' means to uncheck it.
```
      | benefits['SSI'] | True | benefits |
```

Radio or dropdown choices.
```
      | favorite_color | green | favorite_color |
```

Text field or textarea. Even if the answer has multiple lines, you can only use one line. When a new line is supposed to appear, instead use `\n`. See below:
```
      | favorite_color | Blue.\nNo, green!\nAaah... | favorite_color |
```

A generic object with an index variable.
```
      | x[i].name.first | Umi | users[1].name.first |
```

### `.there_is_another` loop

You can use `.there_is_another` in your interview. You can also use the Step to set that value. In story tables, though, you must replace `.there_is_another` in your `var` column - replace it with `.target_number`. In the `value` column, put the number of items of that type. 

The `trigger` column stays the same as it usually does - it should have the name of the page's trigger varaible. Example:

For a loop using `.there_is_another` and these values:
```
      | x[i].name.first | Umi | users[0].name.first |
      | x[i].name.first | Ulli | users[1].name.first |
      | x[i].name.first | Ulla | users[2].name.first |
```

would also require a row like this:
```
      | x.target_number | 3 | users.there_is_another |
```

### Story table signature

The `value` for a row setting a signature doesn't matter. All signatures will be a dot.
```
      | user.signature |  | user.signature |
```

### Other notes

Don't worry about accidentally including variables that won't show up during the test. Extra rows will be ignored.


## Steps

[Steps](https://cucumber.io/docs/gherkin/reference/#steps) happen one after the other sequentially. It's a bit more like you're the user clicking through the form. They can let you do things like download a file or make sure an user input invalidation message appears. If you change the order of the questions, even if you don't change any variable names, you may have to update these types of steps to change their order to match the new order of the screens.

Note: `When`, `Then`, `And`, and `Given` at the beginning of sentences can all be used interchangeably. It doesn't matter which you use.

### Starting Steps

Open an interview in your package by using its filename.
```
    Given I start the interview at "yaml_file_name.yml"
```
<!-- Given I start the interview at "filename" in lang "Español" -->
<!-- And I am using a mobile -->

After you've started the interview, customize the amount of time you will give each Step in that Scenario. Remember that you can use this as many times as you want.
```
    Given the maximum seconds for each Step is 200
```

### Observe things about the page

To check the id, look at the YAML `question` block and copy the id from there. Adding this Step into the code of the test can help you, as a human, keep track of what fields you should be filling in next. It will also show up in the logs of the tests and can help you see where things went wrong.
```
    Then the question id should be "some yaml block id!"
```
```
    Then I can't continue
```
```
    Then I will be told an answer is invalid
```
```
    Then I arrive at the next page
```

Screenshots will be in the GitHub action's [artifacts](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/downloading-workflow-artifacts).
<!-- And I take a screenshot ?(?:named "([^"]+)")? -->
```
    Then I take a screenshot
```
```
    Then I should see the link to "a-url.com"
```

<!-- Then an element should have the id "some_HTML_element_id" -->

Checking phrases will be language specific. Also, docassemble sometimes uses some weird characters on screen, so copying it straight from the screen is best.
```
    Then I SHOULD see the phrase "some phrase"
```
```
    Then I should NOT see the phrase "some phrase"
```

<!-- Then the "a" link leads to "a" -->
<!-- Then the "a" link opens a working page -->
<!-- Then the "a" link opens in a new window -->
<!-- Then the "a" link opens in the same window -->


### Set fields

Use this Step to continue to the next page. The text on the button itself doesn't matter.

```
    When I tap to continue
```

Use this Step to set the values of fields. Comparing this to the story table described above, the first quotes contain the equivalent of the `var` column and the second quotes contain the `value` you want to set.
```
    When I set the variable "users[i].hair_color" to "blue"
```

Sign on a signature field. All signatures are the same.
```
    When I sign
```

Specifically for the Document Assembly Line 4-part name questions. No punctuation. We recommend you just use 2 names - the first name and last name - but you can have all these formats:

- Firstname Lastname
- Firstname Middlename Lastname
- Firstname Middlename Lastname Suffix (where suffix is one of the dropdown suffix choices, like `II`)

```
    When I set the name of "x[i]" to "Ulli User"
```

Specifically for the Document Assembly Line 5-field address questions. t can be any address you want that matches the format shown, commas and all.

```
    When I set the address of "users[0]" to "120 Tremont Street, Unit 1, Boston, MA 02108"
```

The Step for the story table, which is better described in sections above.
```
    I get to the question id "some yml block id" with this data:
```

### Other actions

Use this Step to continue to the next page. The text on the button itself doesn't matter.
```
    When I tap to continue
```

Download documents. The documents will be in [the GitHub action's artifacts](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/downloading-workflow-artifacts). If you think this step could take more than 2 minutes, use the "maximum seconds for each Step" Step 9described in another section) to give the file more time to download.
```
    Then I download "file-name.pdf"
```

This Step will let you wait for a number of seconds when you are on a page. The time must be shorter than the maximum amount of time for each Step. By default, that's 120 seconds, but you can increase that with the "maximum seconds for each Step" Step. It can help in some situations where you run into timing issues. It does nothing for the timing of other steps. You can give this Step any number of seconds, though all Steps will timeout after two minutes. You can add multiple rows of these if you want.

The situations that need this are pretty rare, but here's an example: You navigate to a new page and set a field. Sometimes it works fine, but someimtes the test says the element does not exist. The page needs an extra few seconds to load. Add this step in to give it that time.
```
    When I wait 10 seconds
```

<!-- When I tap the defined text link {string} -->
<!-- When I do nothing -->

<!--
## Failing tests 
{#failing-tests}

Look at the [results of your tests](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity). Some of the error messages may tell you more. Also download the [Github test ‘artifacts’](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/downloading-workflow-artifacts) and see if any of those files give you a clue.


### The tests fail at the very first Step 
{#the-tests-fail-at-the-very-first-step}



1. Check the ‘Run npm run setup’ line right above the failed tests. Click to expand it and make sure that setting up the interview didn’t fail. If it did, try running it again.
2. Manually [make a new Project](https://docs.google.com/document/d/1pj1DFIhzzwB6raeCytnmPSR41WfNvG-T9GYPsf1wOsA/edit#heading=h.8yw6hi5hgw1d) on the server and [pull the code](https://docs.google.com/document/d/1pj1DFIhzzwB6raeCytnmPSR41WfNvG-T9GYPsf1wOsA/edit#heading=h.yve8jwod1owz) from the exact same branch into that Project. Manually run the file that is named in your test and double check that it is working the way you expect it to.
3. Make sure that the file you named in your `Given` **Step** is the right file.
4. Have you changed the server where you were running your code? Check your repository’s code in the .github/workflows/run_form_tests.yml file. Make sure the `BASE_URL` in there is the correct one for your server. [Edit it](https://docs.github.com/en/free-pro-team@latest/github/managing-files-in-a-repository/editing-files-in-your-repository) if it is the wrong one.
5. Contact someone who might know more.


### Two tests on the same branch failed at the same time 
{#two-tests-on-the-same-branch-failed-at-the-same-time}

IF YOU TRIGGER TWO TESTS ON THE SAME BRANCH VERY CLOSE TOGETHER, both tests might fail. You’ll have to rerun the tests. When you’ve pushed/committed, try to wait until one test has finished running before pushing/committing again. You can see [when a test has finished running on the actions page](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity). You can also[ cancel a test](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/canceling-a-workflow).

If we see that people are finding this framework useful, we can improve on that.


### The test failed on or after ‘upload error artifacts’ 
{#the-test-failed-on-or-after-‘upload-error-artifacts’}

Something probably went wrong with Github. Or maybe they have a maximum amount that they can download that we haven’t yet dug up in their documentation. Try rerunning the tests and, if it fails the same way a second time, get in touch with us.


### The error says it “timed out“ 
{#the-error-says-it-“timed-out“}

That’s a stock system error. Some **Step** took too long to finish in a way for which we have not yet created a custom error message or cannot detect. It is often a page that took too long to load. It sometimes happens when the Project got deleted in the middle of the test, or when the [`Run npm run setup` phase doesn’t work correctly](#bookmark=id.y1ibk27fo4jy).


### Some other mysterious error 
{#some-other-mysterious-error}



1. You can rerun the test
2. Try to search for the text of the error online (don’t spend more than 20 min on this, though)
3. Ask one of us. Remember that this framework is under development. Something might be wrong with our code.

-->

<!--

### Translations

Always give your `choices` values that are separate from their labels and will never be translated.

In docassemble, you can write `choices` a few different ways.

Bad

```
question: |
  What is your favorite color?
fields:
  - Colors: favorite_color
    input type: radio
    choices:
      - green
      - red
      - blue
```

Good

```
question: |
  What is your favorite color?
fields:
  - Colors: favorite_color
    input type: radio
    choices:
      - green: green
      - red: red
      - blue: blue
```

If your field is like the Bad example, the label of a choice is also its value and the translations will break the tests. This is because the label will be translated. Since the label written this way is also the value, the value in the translated version of the interview will be different than the value you wrote in for your test.

If your field is like the Good example, the value of the choice should never get translated so it should always be the same and the tests will be happy.

-->


## Test instructions details

### Private GitHub repositories

:::caution
If your GitHub repository is private, your test account will need to be linked to a GitHub account that has access to that private repository.
:::

### Add a new test

Go to your Playground > the dropdown Folders menu > Sources.

Add a new file that ends in the extension `.feature`. Ex: `has_children.feature`

The next time you commit, your test will be run. You can add and edit multiple test files.

### When do tests run?

Tests run when you commit your files to GitHub. That might be when you hit the 'Commit' button on the Packages page. It can also happen when you edit, add, or delete files in GitHub itself.

If you know how to use GitHub [actions](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity), you can also run the tests manually from GitHub actions with some more options.

### Scenario descriptions

Scenario descriptions affect the names of error screenshot files and report headings, so try to use useful descriptions.

<!-- I think this info is useful, but I'm not sure where it should go.
## About writing tests

**Who?**

It is easier to write the tests if you have access to the YAML code and can understand a bit about docassemble.

**What?**

There are a couple kinds of tests you can write.

You can write a really simple test right away that just makes sure your a file runs using the name of the file. Write a `Scenario` for each file you want to test.

```
Feature: Interviews load

  Scenario: The 209A loads
    Given I start the interview at "ma_209a_package.yml"

  Scenario: The Plaintiff's Motion to Modify loads
    Given I start the interview at "plaintiffs_motion_to_modify_209a.yml"
```

More complex tests might wait till your code is pretty much how you want it. Every time you change your variable names, you may have to update the tests.

**Where?**

The Sources folder. (Go to your Playground > the dropdown Folders menu > Sources.)

**When?**

Write the simple test described above as soon as you want. For the rest, write most of the tests after your code is mostly stable - you don't plan to change the variables that much.

**Why?**

Right now we're focused on two things:

1. The interview runs.
1. The interview keeps working when superficial things about it change. Things like changing the order of questions, the language, or adding translations.
-->

<!--
## Reading results

Output at the end of the test (in the console)

- The report
- The errors with their Steps listed (that can be annoying with long tables)
- The final count

Artifacts

- error screenshots
- reports
- custom screenshots
-->

<!--
## Running locally

.env

BASE_URL
REPO_URL
BRANCH_PATH
EXTRA_LANGUAGES
DEBUG

Debug/Non-headless mode
-->

<!-- 
## Open questions

We're interested in hearing your thoughts about these questions in particular.

What kinds of tests would be useful?

What kinds of tests can we provide?

Who are the main users of the testing framework?

-->

## Built with

Kiln uses cucumber, puppeteerjs, cheerio, and runs the assertions using mocha and chai.

Even though this is built off of [cucumber](https://cucumber.io/), this framework has a different, less lofty, purpose. cucumber focuses on BDD (behavior driven development). This framework mostly deals with regression testing and other conveniences.

## Repositories

The framework's repository is at https://github.com/SuffolkLITLab/ALKiln.

The interview for setting up tets for a repo is at https://apps-dev.suffolklitlab.org/start/test-setup/. The repo for that interview is at https://github.com/plocket/docassemble-ALAutomatedTestingTests.

The repo for the interviews for testing the framework is also at https://github.com/plocket/docassemble-ALAutomatedTestingTests.
