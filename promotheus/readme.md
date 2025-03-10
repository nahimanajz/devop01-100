## Promotheus
it is a monitoring which identifies application state, failure and the cause of application failure

## Main Component: Promotheus Server
Promotheus web UI
-> Promotheus 
-> HTTP Server(accept queries):accept promQL queries
-> Storage (stores metrics data): Time series Database
-> Retrieval (pulls metric data): Data Retrieval Worker

## Target and Metrics

Prometheus monitor
- linux/windows server
- Single application
- Apache Server
- Service, like Database 

Everythig that prometheus monitors is called target and they could be
1. cpu status
2. Memory/ disk space usage
3. Request count
4. Request Duration
5. Exceptions Count
... and that unit you are eager to monitor is called metric which are dsved in prometheus `storage`, metrics are human-readabe text-based.
## types of metrics
1. `Counter:` how many x happened
2. `Gauge:` what is current value of x now?
3. `Histogram:` how long or how big?

## How does prometheus collects metrics from the target
- screenshot saved in freeform macos app

## Alternatives to prometheus
- Amazon cloud watch
## Alert manager
- Prometheus has component called alert manager that is responsible for firing  alerts via email, slack channel
- Prometheus store data on local disk or remote storage  in format of time series later on queries using PromQL since you can't save them directly to 
    Relational databases
## Querying Prometheus

**Example Queries:**

``` https_request_total{status:!~"4.."} ```
- Query all HTPP status codes except 4xx ones
``` rate(http_requests_total[5m])[30m:]```
- Returns the 5-minute rate of the http_requests_total metric for the past 30 mins
