import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore} from "react-redux"
import { chooseISBN, chooseTitle, chooseAuthor, chooseLength, chooseStyle } from "../redux/slices/RootSlice"


interface BookFormProps {
  id?: string[]
}

const BookForm = ( props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.isbn } ${ props.id }`)
      setTimeout(()=>{window.location.reload()}, 500)

    } else {
      dispatch(chooseISBN(data.isbn));
      dispatch(chooseTitle(data.title));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseLength(data.length));
      dispatch(chooseStyle(data.style));

      server_calls.create(store.getState())
      setTimeout(()=>{window.location.reload()}, 500)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <Input {...register('isbn')} name='isbn' placeholder="ISBN" />
        </div>
        <div>
          <label htmlFor="">Title</label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Input {...register('author')} name='author' placeholder="Author" />
        </div>
        <div>
          <label htmlFor="length">Length</label>
          <Input {...register('length')} name='length' placeholder="Length" />
        </div>
        <div>
          <label htmlFor="style">Style</label>
          <Input {...register('style')} name='style' placeholder="Style" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm