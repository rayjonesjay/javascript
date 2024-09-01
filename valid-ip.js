function findIP(input) {
  // Regular expression to match IP addresses with optional ports
  const re = /\b(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d{1,5}))?\b/g;

  // Find all matches
  const matches = input.matchAll(re);

  // Validate IP addresses and ports
  const validIPs = [];
  for (const match of matches) {
    const ip = match[1];
    const portStr = match[2];

    // Validate IP address
    const ipParts = ip.split('.');
    if (ipParts.length !== 4 || ipParts.some(part => {
      const num = Number(part);
      return num < 0 || num > 255 || (part !== num.toString()); // Check for leading zeros
    })) {
      continue;
    }

    // Validate port if present
    if (portStr) {
      const port = parseInt(portStr, 10);
      if (isNaN(port) || port < 0 || port > 65535) {
        continue;
      }
    }

    validIPs.push(ip + (portStr ? ':' + portStr : ''));
  }

  return validIPs;
}
//
// // Example usage
// const input = "http://127.0.0.1:8080 https://localhost:443 192.168.1.100 10.0.0.1:12345 127.0.0.1:65536";
// const ips = findIP(input);
// console.log("Valid IP addresses:", ips);
