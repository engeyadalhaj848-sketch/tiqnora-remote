# ID and relay infrastructure (not deployed)

There is no Tiqnora Remote VPS at this time. The server is planned as a separately hosted RustDesk OSS hbbs/hbbr deployment, not on Vercel.

Required before going live:
- provision a dedicated server and choose an appropriate region;
- pin an audited server container version/digest;
- configure server hostname, verified public key and correct firewall rules;
- back up server keys securely; never commit private keys or credentials;
- monitor uptime, logging, abuse reports and update process;
- test actual access with consent and revocation.

This repository does NOT contain live server credentials or a fake working endpoint.
