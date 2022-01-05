import { NAVLIST } from '@src/constants';
import { Colors, FontSize, Media } from '@src/style';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavContainer>
      <NavLogo>(ICON) FITNESS MANAGER</NavLogo>
      <NavLinks>
        {NAVLIST.map((nav, i) => (
          <NavLink key={`${nav}-${i}`}>{nav}</NavLink>
        ))}
      </NavLinks>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: ${Colors.brightText};
  font-weight: bold;
  white-space: nowrap;

  @media ${Media.md} {
    flex-direction: column;
    gap: 1.25rem;
    padding: 1.25rem;
  }

  @media ${Media.sm} {
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
  }
`;

const NavLogo = styled.div`
  font-size: ${FontSize.large};
  cursor: pointer;

  @media ${Media.sm} {
    font-size: ${FontSize.medium};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  margin-right: 1rem;

  @media ${Media.sm} {
    font-size: ${FontSize.small};
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLink = styled.li`
  display: inline-block;
  cursor: pointer;

  &:after {
    display: block;
    content: '';
    border-bottom: solid 3px ${Colors.brightText};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
