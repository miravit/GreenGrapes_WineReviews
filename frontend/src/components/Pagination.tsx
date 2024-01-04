import styled from "styled-components";
import { theme } from "../themes/theme";

interface ButtonProps {
  active: boolean;
}

const Button = styled.button<ButtonProps>`
  margin: 5px;
  background-color: ${(props) =>
    props.active ? `${theme.backroundColor}` : theme.buttonColor};
  color: ${theme.buttonTextColor};
  border: ${(props) => (props.active ? `white 2px solid` : "")};
`;
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// pagination logic from https://aalhommada.medium.com/make-pagination-with-reactjs-d052b3b92720
export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      {pages.map((page) => (
        <Button
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
