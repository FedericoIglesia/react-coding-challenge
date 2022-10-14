function Pagination({ talentsPerPage, talent, pages }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(talent / talentsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <a onClick={() => pages(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Pagination;
