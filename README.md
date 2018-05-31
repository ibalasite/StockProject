diff --suppress-common-lines --speed-large-files -y File1 File2 | wc -l
create /DB {"type":"mysql","user":"root","password":"{yourpwd}","host":"rdb","port":"3306","database":"punk"} 
create /RedisServer {"list":[{"host":"test1","port":"6379"},{"host":"test2","port":"6379"},{"host":"test3","port":"6379"},{"host":"test4","port":"6379"}]}
create /ZookeeperServer {"list":[{"host":"zookeeper1","port":"2181"},{"host":"zookeeper2","port":"2181"},{"host":"zookeeper3","port":"2181"}]} 
create /KafkaServer {"list":[{"host":"kafka1","port":"9092"},{"host":"kafka2","port":"9092"},{"host":"kafka3","port":"9092"}]} 
