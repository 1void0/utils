# Types

If your project uses Github issues, you might want to add labels corresponding to the commit types associated with your project to maintain consistency. You will be able to define from the issue creation the type of commit expected, simplifying your workflow and making clear what is expected in the final commit.

We associated a color to each type, so we can group several Github labels per type.

Here is a list of all the types allowed in `commitlint-config-nova`:

![#006cbe](https://placehold.it/15/006cbe/000000?text=+) `build [#006cbe]`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)

![#ffffbb](https://placehold.it/15/ffffbb/000000?text=+) `chore [#ffffbb]`: A change that doesn't fit in any other category (e.g. publish package, update .gitignore, etc.)

![#046D8B](https://placehold.it/15/046D8B/000000?text=+) `ci [#046D8B]`: Changes to our CI configuration files and scripts.

![#602385](https://placehold.it/15/602385/000000?text=+) `content [#602385]`: Content related changes (e.g. copy, images, videos, etc.)

![#b6328d](https://placehold.it/15/b6328d/000000?text=+) `design [#b6328d]`: Changes to the user experience or user interface (UX/UI).

![#10339a](https://placehold.it/15/10339a/000000?text=+) `docs [#0c76c6]`: Documentation only changes

![#1cce99](https://placehold.it/15/1cce99/000000?text=+) `feat [#1cce99]`: Adds, modifies or removes a feature

![#cd2f40](https://placehold.it/15/cd2f40/000000?text=+) `fix [#cd2f40]`: A bug fix

![#d7ffc1](https://placehold.it/15/d7ffc1/000000?text=+) `perf [#d7ffc1]`: A code change that improves performance

![#fca042](https://placehold.it/15/fca042/000000?text=+) `refactor [#fca042]`: A technical improvement or refactoring which does not add any new features or change existing features

![#f70eeb](https://placehold.it/15/f70eeb/000000?text=+) `revert [#f70eeb]`: Reverts a previous commit

![#f9d820](https://placehold.it/15/f9d820/000000?text=+) `style [#f9d820]`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)

![#f95411](https://placehold.it/15/f95411/000000?text=+) `test [#f95411]`: Adding missing tests or correcting existing tests

## Github labels

To create the Github labels, you can use our [labels.json](../labels.json) and follow the instructions below:

> ⚠️ This will **remove(!)** all your existing labels and create new ones.

#### Install `git-labels-cli`

```bash
$ npm install -g git-labels-cli
```

You will need a Github token. You can create one at https://github.com/settings/tokens/new.

#### Create the labels

```bash
$ git-labels --auth
$ git-labels <project-name> --file labels.json
```

### Additional colors

In addition to the colors defined for the types, we defined those color groups for conveniency on Github:

![#fae6ce](https://placehold.it/15/fae6ce/000000?text=+) `scope [#fae6ce]`: The scope used with the ype in the commit. Usually the part of the application being affected by the changes.

![#555555](https://placehold.it/15/555555/000000?text=+) `on hold [#555555]`: This issue or pull request is currently bloqued by something

![#ececec](https://placehold.it/15/ececec/000000?text=+) `inactive [#ececec]`: duplicate, invalid, wontfix...

![#a2eeef](https://placehold.it/15/a2eeef/000000?text=+) `hint [#a2eeef]`: good first issue, help wanted...

![#bfdadc](https://placehold.it/15/bfdadc/000000?text=+) `feedback [#bfdadc]`: question, discussion...

### Labels available

The following labels will be available in yout Github issues:

#### Labels associated to a type

![#cd2f40](https://placehold.it/15/cd2f40/000000?text=+) `bug 👾`: Something isn't working (type: fix)

![#006cbe](https://placehold.it/15/006cbe/000000?text=+) `build 🚧`: Changes that affect the build system or external dependencies (type: build)

![#ffffbb](https://placehold.it/15/ffffbb/000000?text=+) `chore 🧹`: A change that doesn't fit in any other category (e.g. publish package, update .gitignore, etc.) (type: chore)

![#046D8B](https://placehold.it/15/046D8B/000000?text=+) `ci 🤖`: Changes to our CI configuration files and scripts (type: ci)

![#f9d820](https://placehold.it/15/f9d820/000000?text=+) `code style 💅🏼`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.) (type: style)

![#602385](https://placehold.it/15/602385/000000?text=+) `content 🦁`: Content related changes (e.g. copy, images, videos, etc.) (type: content)

![#006cbe](https://placehold.it/15/006cbe/000000?text=+) `dependencies 📦`: Updates a dependency (type: build)

![#b6328d](https://placehold.it/15/b6328d/000000?text=+) `design 🎨`: Changes to the user experience or user interface (UX/UI) (type: design)

![#10339a](https://placehold.it/15/10339a/000000?text=+) `documentation 📑`: Documentation only changes (type: docs)

![#1cce99](https://placehold.it/15/1cce99/000000?text=+) `feature ✨`: Adds, modifies or removes a feature (type: feat)

![#d7ffc1](https://placehold.it/15/d7ffc1/000000?text=+) `performance 🚀`: A code change that improves performance (type: perf)

![#fca042](https://placehold.it/15/fca042/000000?text=+) `technical debt 🛠`: A technical improvement or refactoring which does not add any new features or change existing features (type: refactor)

![#f70eeb](https://placehold.it/15/f70eeb/000000?text=+) `revert 🔙`: Reverts a previous commit (type: revert)

![#f95411](https://placehold.it/15/f95411/000000?text=+) `test 🛡`: Adding missing tests or correcting existing tests (type: test)

#### Scope label

![#fae6ce](https://placehold.it/15/fae6ce/000000?text=+) `SCOPE_PLACEHOLDER`: Use this color for creating your scope labels

#### Other labels

![#bfdadc](https://placehold.it/15/bfdadc/000000?text=+) `discussion 🗣`: A discussion that it not necessarily related to a concrete bug or feature. The outcome of the discussion may be the creation of one or both of the latter.

![#ececec](https://placehold.it/15/ececec/000000?text=+) `duplicate 👻`: This issue or pull request already exists

![#a2eeef](https://placehold.it/15/a2eeef/000000?text=+) `good first issue 👋🏼`: Good for newcomers

![#a2eeef](https://placehold.it/15/a2eeef/000000?text=+) `help wanted 🙏🏼`: Extra attention is needed

![#ececec](https://placehold.it/15/ececec/000000?text=+) `invalid ⛔️`: This doesn't seem right

![#555555](https://placehold.it/15/555555/000000?text=+) `on hold 🛑`: This issue or pull request is currently bloqued by something

![#bfdadc](https://placehold.it/15/bfdadc/000000?text=+) `question ⁉️`: Further information is requested

![#ececec](https://placehold.it/15/ececec/000000?text=+) `wontfix 🙅‍♀️`: This will not be worked on
