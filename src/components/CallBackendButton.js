import { Button } from '@chakra-ui/react'
import axios from 'axios'

const CallBackendButton = (props) => {
    return (<Button onClick ={() => getChapterReflect(props.text)} colorScheme='blue'>Button</Button>);
}

// make a post request with axios to 127.0.0.1:8000/chapter_reflect with the CSRF token and send a JSON with parameter "chapter_input"

const getChapterReflect = (chapter_input) => {
    axios.post('http://127.0.0.1:8000/chapter_reflect', {
        chapter_input: chapter_input,
    }, {
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error, chapter_input);
    })
}
    // const getChapterReflect = () => {
//     axios.get('http://127.0.0.1:8000/chapter_reflect', {
//         headers: {
//             'X-CSRFToken': getCookie('csrftoken')
//         }
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }

// Get CSRF token from cookie
const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}



export default CallBackendButton