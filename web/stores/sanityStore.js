import { defineStore } from 'pinia';
import { general as generalQuery } from '../utils/queries';

export const useSanityStore = defineStore('sanityStore', () => {
  const general = ref(undefined);

  async function setGeneral() {
    const query = groq`{
      ${generalQuery}
    }`;

    const { data } = await useSanityQuery(query);
    general.value = data.value.general;
  }

  return { general, setGeneral };
});
