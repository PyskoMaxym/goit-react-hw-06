import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
const App = () => {
  return (
    <>
      <ContactForm  />
      <SearchBox />
      <ContactList />
    </>
  )
}

export default App;