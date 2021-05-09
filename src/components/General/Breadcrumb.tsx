import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { CONFIG } from "../../config/config";
import Flex from "./Flex";

const Item = styled.button`
  font-size: 1.4rem;

  &:after {
    content: "/";
    display: inline-block;
    padding: 0 1.5rem;
    opacity: 0.5;
  }

  &:last-child:after {
    display: none;
  }
`;

interface BreadCrumbItem {
  title: string;
  href?: string;
}

interface IProps {
  items?: BreadCrumbItem[];
}

const Breadcrumb = (props: IProps) => {
  const history = useHistory();

  const { items } = props;

  return (
    <Flex className="justify-start items-center mb-12">
      <Item
        className="hover:underline"
        style={{ outline: `none` }}
        onClick={() => history.push(`/`)}
      >
        {CONFIG.APP_NAME}
      </Item>
      {items !== undefined &&
        items.map((item) => {
          return (
            <Item
              style={{ outline: `none` }}
              key={item.title}
              className={`${
                item.href === undefined
                  ? `opacity-50 cursor-default`
                  : `hover:underline`
              }`}
              onClick={() => {
                if (item.href !== undefined) {
                  history.push(`/${item.href}`);
                }
              }}
            >
              {item.title}
            </Item>
          );
        })}
    </Flex>
  );
};

export default Breadcrumb;
