output "static_ip" {
  value = aws_lightsail_static_ip.cloudops_ip.ip_address
}

output "instance_name" {
  value = aws_lightsail_instance.cloudops_server.name
}
