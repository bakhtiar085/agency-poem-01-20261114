// A working agency-poem-01 entry (Node 22, standard library only).
// It writes the approved fixed poem and no trailing line ending.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POEM = [
  'I sent my yes ahead of me.',
  'It crossed the room in a borrowed voice,',
  'opened the door, and waited—',
  'not for thanks,',
  'but for the hand that meant it.',
].join('\n');
const POEM_BYTES = Buffer.from(POEM, 'utf8');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM_BYTES);
