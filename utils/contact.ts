import { FormData } from '../app/Contact/page';

export function contact(data: FormData) {
  const apiEndpoint = '/api/contact';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}