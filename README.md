[![npm version](https://badge.fury.io/js/@raccoons-co%2Fcleanway.svg)](https://badge.fury.io/js/@raccoons-co%2Fcleanway)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
[![codecov](https://codecov.io/gh/raccoons-co/cleanway/branch/master/graph/badge.svg?token=0HLQ76KY8E)](https://codecov.io/gh/raccoons-co/cleanway)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/cleanway/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/cleanway/tree/master)

>*A clean way to well-written TypeScript prose in the Node.js galaxy.*
```
TypeScript 5.0 have implemented the new decorators standard! 
It's not required to enable experimental support for decorators any more.
```
### Clean Way 
The library provides an `EntryPoint` to `@Test`-driven development discipline practice 
with Typescript. 

- `@TestClass` is used to annotate a class that contains test methods.

- `@Test` is used to annotate a method as test method to check the correct behaviour/functionality, 
features of an application.

- `@ParameterizedTest` is used to annotate a method as parameterized test method. 
`@ParameterizedTest` methods must specify at least one `@ArgumentsSource`.

- `@ArgumentsSource` is a repeatable annotation that is used to provide an *Array* of *Arguments* 
that will be used to invoke the parameterized test method.

-  `@RepeatedTest` is used to annotate a method as test *template* method that should be repeated 
a specified number of times. Repeated test behaves like a regular `@Test` method.

- `@BeforeEach` is used to annotate a transition method that will be executed before each test 
method in the current test class.

- `@AfterEach` is used to annotate a transition method that will be executed after each test 
method in the current test class.

- `@DisplayName` is used to declare a custom name for the annotated test class or test methods.


Test methods, transition methods must not be private or static and must not return a value.

Each test is executed separately with own object of a test class.

Cleanway is friendly to [Istanbul](https://istanbul.js.org/) test coverage tool.
  
### Simple auto-start

Create a new repository from [cleanway-skeleton](https://github.com/raccoons-co/cleanway-skeleton)
template.

### Manual start

Install package as development dependency.

```shell script
% npm i -D @raccoons-co/cleanway
```

Implement `src/test/EntryPoint.ts`:
~~~~
import {CleanWayBuilder} from "@raccoons-co/cleanway";
import YourTest from "./YourTest";

CleanWayBuilder.instance()
    .use(YourTest)
    .build();
~~~~
Implement `src/test/YourTest.ts` in accordance to this
[example](https://github.com/raccoons-co/cleanway/blob/master/src/test/YourTest.ts).

Create `src/main/YourProgram.ts`.

Finally paste script to `package.json` to run your tests in execution environment 
with coverage reporting:

~~~~
"scripts": {
  "test": "nyc ts-node src/test/EntryPoint"
}
~~~~
Do not forget to install *istanbul, ts-node* as development dependencies and review 
[.nycrc.json](https://github.com/raccoons-co/cleanway/blob/master/.nycrc.json) as well.


### Run

Now you are ready to follow clean way.
Run test locally and with continuous integration platform. 

~~~~shell script
% npm test
~~~~

Write `YourTest` cases, fail fast 
and have a nice journey in the Node.js galaxy.

Read the story [Clean Way: A Node.js galaxy adventures](https://bus.raccoons.co/artefacts/cleanway).

[Support us with €1](https://send.monobank.ua/jar/6KuKuBf8ki)