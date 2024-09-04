function findIP(input) {
  // Regular expression to match IP addresses with optional ports
  const re = /\b((?:[1-9][0-9]?|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(?:[1-9][0-9]?|1[0-9]{2}|2[0-4][0-9]|25[0-5])(?:\:(?:[0-9]{1,5}))?\b/g;

  // Find all matches
  const matches = input.match(re);

  // Validate IP addresses and ports
  const validIPs = [];
  if (matches) {
    for (const match of matches) {
      // Split IP and port
      const [ip, port] = match.split(':');

      // Validate IP address
      const ipParts = ip.split('.');
      if (ipParts.length === 4 && ipParts.every(part => {
        const num = parseInt(part, 10);
        return num >= 0 && num <= 255 && part === num.toString(); // Check for leading zeros
      })) {
        // Validate port if present
        if (!port || (parseInt(port, 10) >= 0 && parseInt(port, 10) <= 65535)) {
          validIPs.push(match);
        }
      }
    }
  }

  return validIPs;
}

// Example usage
const input = "http://127.0.0.1:8080 https://localhost:443 192.168.1.100 10.0.0.1:12345 127.0.0.1:65536";
const ips = findIP(input);
console.log("Valid IP addresses:", ips);
