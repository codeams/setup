# resources

## security

**ufw**
- https://linuxize.com/post/how-to-setup-a-firewall-with-ufw-on-ubuntu-18-04/
- https://www.tecmint.com/setup-ufw-firewall-on-ubuntu-and-debian/

some useful commands:
- `sudo ufw status verbose`
- `sudo ufw default deny incoming`
- `sudo ufw default allow outgoing`
- `sudo ufw allow from 192.168.1.0/24 to any port 22`
- `sudo ufw deny from 11.12.13.0/24`
- `sudo ufw status numbered`
- `sudo ufw delete 1`
- `sudo ufw reset`
- `sudo ufw disable`
- `sudo ufw enable`

