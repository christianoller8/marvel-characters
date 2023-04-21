<div id="top"></div>
<h1 align="center">
  <img src="" alt="" width="200"></img>
  <br><br>
  [INSERT TITLE]
</h1>
<h4 align="center">[insert summary]</h4>

<p align="center">
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript">
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Typescript">
</p>
<br>


> This project was generated with
> · Angular CLI: 15.2.5
> · Node: 18.15.0
> · Package Manager: npm 9.5.0
> · OS: win32 x64

<br>
<p>Holas</p>

## Table of Content

- [Usage](#usage)
- [Gists](#gists)
- [Deploy](#deploy)
- [Screenshots](#screenshots)
- [Responsive simulation](#simulation)
- [Architecture](#architecture)
- [Gitflow](#gitflow)
- [SCSS](#scss)
- [Using Pipes](#pipes)
- [External Library](#library)
- [About Me](#about)
- [License](#license)

<a name="usage"/>

## Usage

### Requirements

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/download/)
- [npm](http://npmjs.com)

### Comands

```bash
  # Clone this repository
  $ git clone [INSERT REPO URL]

  # Go into the repository
  $ cd [INSERT PROJECT NAME]

  # Install dependencies
  $ npm install

  # Run the app
  $ npm run start
```

<a name="gists"/>

## Gists

My Gist: https://www.notion.so/Gists-4ba34478f67342f7ab422eee8b548551?pvs=4

#### How to implement multilanguage application - Angular

https://gist.github.com/Sandro34BM/bfc1f38bfd9620a0035cddc2b943615a

#### How to implement breadcrumb + back button

https://gist.github.com/Sandro34BM/369f5aec84ec0c9d8b5650baf09d6648

<a name="deploy"/>

## Deploy

Link to Vercel Deploy:

Following the gitflow system, I have considered doing two deploys, one for production and one for development, this way I can test the modifications in the development environment.

- [Development]([URL DEVELOPMENT])
- [Production]([URL PRODUCTION])

<a name="screenshots"/>

## Screenshots

### Desktop version:

<div align="center">
    <img src="" alt="" width="300">
    </img>
</div>

### Mobile version:

<div align="center">
    <img src="" alt="" width="300">
    </img>
</div>

<a name="live"/>

## Responsive simulation

[INSERT URL TO UI.DEV]

<a name="architecture"/>

## Architecture

For this project I have used a folder structure keeping in mind the possible scalability of the application. Allowing the files to be found efficiently.

<a name="gitflow"/>

## Gitflow

I wanted to simulate a real working environment where the Gitflow system is used in order to practice and see the possible conflicts that may occur.

<a name="scss"/>

## SCSS

### Variables

To be more flexible with the colour palette used, I store its colours (primary, secondary and tertiary) in variables.

```css
$primary-color: white;
$secondary-color: bisque;
$tertiary-color: grey;
```

### Mixins

I have used mixins for the section headers, as they use the same style.

```css
@mixin headingPage {
  font-size: 2.5em;
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 2%;
}
```
<a name="pipes"/>

## Using Pipes

Pipes used in this project are:

```ts
{{ lang | uppercase }}    // For language selector

{{ "label" | translate }} // For translation

```

<a name="library"/>

## External Library

I have used a personal library for the footer.

```bash
npm i sandro-footer

```

<a name="about"/>

## About Me

<br>
<div align="center">
    <img src="https://drive.google.com/uc?id=1g2DEklyiR7XQLeCv1mOhjB6G7_3Yj99g" alt="" width="200">
    </img> <br> <br>
    <p>Sandro Bortolotti Montón</p> 
    <p> sandrobortolotti34@gmail.com</p>
    <a href="https://www.linkedin.com/in/sandro-bortolotti-478a4b243/">LinkedIn</a>
</div>

<a name="license"/>

## License

MIT

---

<p align="right"><a href="#top">🔝</a></p>
<br>
