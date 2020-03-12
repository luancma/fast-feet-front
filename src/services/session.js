import api from './api';

export default function sessionService:{
  static function post(obj) {
    console.log(123, obj);
    await api
      .post('sessions', obj)
      .then(value => value.data)
      .catch(error => error.response.data);
  }
}
