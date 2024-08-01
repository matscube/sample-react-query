up:
	go run main.go

task-add:
	curl -X POST \
	  http://localhost:8080/tasks \
	  -H 'Content-Type: application/json' \
	  -d @task.json

task-list:
	curl -X GET http://localhost:8080/tasks | jq

task-update:
	curl -X PUT \
	  http://localhost:8080/tasks/1 \
	  -H 'Content-Type: application/json' \
	  -d @task.json

task-delete:
	curl -X DELETE http://localhost:8080/tasks/1
