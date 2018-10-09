node {
    stage ('deploy_stable') {
        sh 'rm -rf /tmp/insights-build/'
        sh 'git clone git@github.com:RedHatInsights/insights-build.git /tmp/insights-build/'
        def pipeline = load '/tmp/insights-build/platform/Jenkinsfile'
        pipeline.deploy('insights/platform/topological-inventory/')
    }
}
