module.exports={
    default:{
        "formatOptions":{
            "snippetInterface":"async-await"
        },
        requireModule:[
            "ts-node/register"
        ],
        require:[
            "src/test/steps/**/*.ts",
            "src/test/hooks/**/*.ts",
            "src/test/steps/**/*.ts","src/hooks/**/*.ts"
            // "src/test/support/**/*.ts"
        ],
        paths:[
            "src/test/features/**/*feature",
        ],

        rerun:{
            formatOptions:{
                snippetInterface:"async-await"
            },
        },
        publishQuiet: true,
        dryRun: false,
        require:[
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule:[
            "ts-node/register"
        ],
        format:[
            "progress-bar",
            "html:reports/cucumber-report.html",
            "progress",
            "json:reports/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel:1
    }
};