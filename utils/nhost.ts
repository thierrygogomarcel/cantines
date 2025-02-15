import { NhostClient } from '@nhost/nhost-js';

// Créer une instance Nhost
const nhost = new NhostClient({
  backendUrl: 'https://uzlgttsccgxwoiutatmp.hasura.eu-central-1.nhost.app',
});

export default nhost;
