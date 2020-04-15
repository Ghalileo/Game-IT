// import React from "react"

// function Search() {

//     const [books, setBooks] = useState([])
//     const [formObject, setFormObject] = useState({})

//     useEffect(() => {
//         loadBooks()
//     }, [])

//     function loadThreads() {
//         API.getBooks()
//             .then(res =>
//                 setBooks(res.data)
//             )
//             .catch(err => console.log(err));
//     };

//     function handleInputChange(event) {
//         const { name, value } = event.target;
//         setFormObject({ ...formObject, [name]: value })
//     };

//     function handleFormSubmit(event) {
//         event.preventDefault();
//         if (formObject.title && formObject.author) {
//             API.saveBook({
//                 title: formObject.title,
//                 author: formObject.author,
//                 synopsis: formObject.synopsis
//             })
//                 .then(res => loadBooks())
//                 .catch(err => console.log(err));
//         }
//     };
//     return (
//         <h1>Search</h1>
//     )
// }

// export default Search;