variable "aws_region" {
  default = "us-east-1"
}

variable "availability_zone" {
  default = "us-east-1b"
}

variable "instance_name" {
  default = "cloudops-prod"
}

variable "bundle_id" {
  default = "small_2_0"
}

variable "key_pair_name" {
  default = "cloudops-tf-key"
}

variable "public_key_path" {
  default = "~/.ssh/cloudops-tf-key.pub"
}

variable "static_ip_name" {
  default = "cloudops-static-ip"
}
