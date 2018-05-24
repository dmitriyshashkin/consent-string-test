const { ConsentString } = require('consent-string');
const { ArgumentParser } = require('argparse');

const parser = new ArgumentParser({
  version: '0.0.1',
  addHelp:true,
  description: 'Consent string parser'
});

parser.addArgument(
  [ 'string' ],
  {
    help: 'consent string'
  }
);

const args = parser.parseArgs();

const consentData = new ConsentString(args.string);

console.log(consentData);
