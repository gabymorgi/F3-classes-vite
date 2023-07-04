import { objectToArray, formatDay } from './format.js';
import ghLanguages from '@/fakeApi/ghLanguages.json';
import ghUser from '@/fakeApi/ghUser.json';

function EmptyApp() {
  console.log('created_at', formatDay(new Date(ghUser['created_at'])));
  console.log('updated_at', formatDay(new Date(ghUser['updated_at'])));
  console.log('languages', objectToArray(ghLanguages));
  return (
    <div>
      👀 open console -&gt; F12
    </div>
  );
}

export default EmptyApp;