import { ref } from "vue";

const counterFunction = () => {
  // data
  const counter = ref(0);
  // methods
  const increase = () => {
    counter.value++;
  };
  const decrease = () => {
    if (counter.value >= 0) {
      counter.value--;
    }
  };

  // Retune vlues
  return { counter, increase, decrease };
};

export default counterFunction;
