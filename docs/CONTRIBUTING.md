# MR Guidelines

## Branch Strategy

- Use **develop** as the base branch to create a feature branch
- Use Gitlab ticket number as branch name
- Link your branch with the tickets raised on Gitlab

## Pre Commit

- Before commiting your code, run the lint and ts checks on your machine by running command
```bash
yarn checks
```
- For some reason if the checks are missed, the lint pipeline on gitlab will indicate you for the errors in your code
- Do no submit a MR for code approval until the pipeline is successful


## Commit Message

- Use active voice
- Include Gitlab ticket number followed by a colon

```
5: Implement header component
```

### Branching off branches

In some cases you might want to branch off of a branch created by yourself or a teammate while you wait for an open MR to be reviewed and merged. (This should be done with caution because that open MR might change!)

If the base branch is still an open MR when you're done with your work, you may open a MR against that branch. When the base branch is merged, update the base branch of your MR to `develop`. **Do not** merge your MR into a branch other than `develop`.


## Submitting PRs

- Prefer small PRs to make code easier to review and get merged
- Use **human readable** titles on PRs, including Gitlab tickets numbers:

```
12: Setup readme file
```

- Give detailed description of what your MR addresses; use images, links, or videos to provide context
- Assign **yourself** to the MR
- When iterating on a feedback, use the "Resolve conversation" button to mark the item as complete
- Use [granular commits](https://dev.to/wes/opening-a-MR-a-primer-4kgc#commits)
  to separate chunks of work to make code easier to review. It's especially important to isolate "noisy" changes like an extra div that adds indentation on every line of a component
- Be explicit if your MR is a work-in-progress (use the `WIP` label)
- Before assigning reviewers, add inline comments on your MR for areas of code where you're looking for particular feedback or that require extra explanation


## Assigning Reviewers

Assign the ticket to [Raj Updhyay](https://gitlab.com/rrajupadhyayy) or [Shubham Navale](https://gitlab.com/shubhamnavale), code approval from either of them is necessary for merging with **develop**

You do not need to assign specific developers to review your MR. Since one team is working on this project, we can use our judgment on which PRs to review. However, if you have come across a MR feel free to review it.

You can also assign reviewers if you want to specifically request their feedback on your work.

## Giving Feedback

- Visit the ticket description, try running the branch on your local machine if time permits. Do one round of smoke testing before approval.

- Be intentional in how you review a MR:

  **Approve:**
  Code is OK to be merged. Any comments or suggestions left can be implemented according to the author's discretion. Code does not need to be re-reviewed after these changes.

  **Request Changes:**
  At least one comment must be addressed before merge (make sure it's clear which comments are must-change). After changes have been made, the reviewer that requested changes can re-review, or, another reviewer can dismiss their review and review on their behalf.

  **Comment:**
  Does not count as an approval, but adds comments or questions the author can address at their discretion.

- For optional comments on change requests, start them with hints such as "_(optional)_", "_(minor)_", or "_(nit)_" to indicate their intent.
