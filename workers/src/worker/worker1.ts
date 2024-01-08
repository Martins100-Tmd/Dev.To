const workerFunctions = () => {
   self.onmessage = (event) => {
      console.log(event.data, 'Locked');

      postMessage(event.data * 2);
   };
};

const codeString = workerFunctions.toString();

const code = codeString.substring(codeString.indexOf('{') + 1, codeString.lastIndexOf('}'));
console.log(code);
const codeToBlob = new Blob([code], { type: 'application/json' });

const codeUrl = URL.createObjectURL(codeToBlob);

export default codeUrl;
