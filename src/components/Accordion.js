function Accordion({ items }) {
const renderedItems = items.map((item) => {
  return (
    <div>
      <div> {item.label}</div>
      <div> {item.content}</div>
    </div>
  )
})


  return renderedItems;
}

export default Accordion;
