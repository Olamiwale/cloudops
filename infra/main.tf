terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_lightsail_key_pair" "cloudops_key" {
  name       = var.key_pair_name
  public_key = file(var.public_key_path)
}

resource "aws_lightsail_instance" "cloudops_server" {
  name              = var.instance_name
  availability_zone = var.availability_zone
  blueprint_id      = "ubuntu_22_04"
  bundle_id         = var.bundle_id
  key_pair_name     = aws_lightsail_key_pair.cloudops_key.name
}

resource "aws_lightsail_instance_public_ports" "firewall" {
  instance_name = aws_lightsail_instance.cloudops_server.name

  port_info {
    protocol  = "tcp"
    from_port = 22
    to_port   = 22
  }
  port_info {
    protocol  = "tcp"
    from_port = 80
    to_port   = 80
  }
  port_info {
    protocol  = "tcp"
    from_port = 3000
    to_port   = 3000
  }
  port_info {
    protocol  = "tcp"
    from_port = 3001
    to_port   = 3001
  }
}

resource "aws_lightsail_static_ip" "cloudops_ip" {
  name = var.static_ip_name
}

resource "aws_lightsail_static_ip_attachment" "cloudops_ip_attach" {
  static_ip_name = aws_lightsail_static_ip.cloudops_ip.name
  instance_name  = aws_lightsail_instance.cloudops_server.name
}
