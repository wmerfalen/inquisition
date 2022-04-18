#!/usr/bin/env node

const dns = require('dns');

/**
 * TODO: get cli switch and verify they want to do reverse nslookup
 */

function perform_reverse_lookup(hosts){
  for(let ip of hosts) {
  try {
    dns.reverse(ip, function (err, hostnames) {
      console.log(`${ip}: ${hostnames}`);
    });
  } catch (e) {
    console.error(`${ip}: ????`);
  }
}
}
