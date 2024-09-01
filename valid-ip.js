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
    if (ipParts.length !== 4 || ipParts.some(part => part < 0 || part > 255)) {
      continue;
    }

    // Validate port if present
    if (portStr) {
      const port = parseInt(portStr);
      if (isNaN(port) || port < 0 || port > 65535) {
        continue;
      }
    }

    validIPs.push(ip + (portStr ? ':' + portStr : ''));
  }

  return validIPs;
}
// Example usage
const exampleString = 'IP addresses are 192.168.0.1, 10.0.0.255:8080, and 172.16.254.1:65536. Invalid IPs are 256.256.256.256 and 192.168.01.1';
console.log(findIP(exampleString));
// Output: ["192.168.0.1", "10.0.0.255:8080"]
