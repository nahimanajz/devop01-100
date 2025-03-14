    ## Component of github actions
    ### Event 
     1. Pull request
     2. Push to a specific branch
     3. `issue:` event can be created from an issue i.e: created, closed,...

Event triggers workflow and work flows are composed by atleast one `Job` and each job has `steps`  step can be a `shell command or action` here actions means a bunch of code to be executed in order to do something.
- A `Job` is a `Runner` and runner could be a `machine` that can be connected to github. 
- Runner comes in two category there is `github hosted runner` or `self hosted runner` github hosted runners comes as `windows`, `ubuntu` or `macos` runner
- Self Hosted runners are completely hosted by you thus you decide which OS to use.