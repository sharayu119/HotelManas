import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  padding: 100px 20px 50px;
  background-color: #f9f9f9;
`;

const TitleH2 = styled.h2`
  text-align: center;
  font-family: 'Playfair Display', serif;
  color: #666;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const MenuWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MenuTitle = styled.h1`
  text-align: center;
  font-family: 'Playfair Display', serif;
  color: #333;
  margin-bottom: 3rem;
  font-size: 3rem;
`;

const MenuSection = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  color: #1a1a1a;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #ffd700;
    margin: 15px auto 0;
  }
`;

const DishGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const DishCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DishImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const DishInfo = styled.div`
  padding: 1.5rem;
`;

const DishName = styled.h3`
  font-family: 'Playfair Display', serif;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
`;

const DishDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const DishPrice = styled.span`
  color: #ffd700;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Menu = () => {
  const menuItems = {
    starters: [
      {
        name: 'Paneer Tikka',
        description: 'Marinated cottage cheese cubes grilled to perfection with Indian spices',
        price: '₹250',
        image: '/images/paneer-tikka.jpg'
      },
      {
        name: 'Veg Spring Rolls',
        description: 'Crispy rolls filled with mixed vegetables and Asian spices',
        price: '₹180',
        image: '/images/spring-rolls.jpg'
      },
      {
        name: 'Masala Papad',
        description: 'Crispy lentil wafers topped with spiced onions and tomatoes',
        price: '₹80',
        image: '/images/masala-papad.jpg'
      }
    ],
    mainCourse: [
      {
        name: 'Butter Chicken',
        description: 'Tender chicken pieces in rich tomato and butter gravy',
        price: '₹350',
        image: '/images/butter-chicken.jpg'
      },
      {
        name: 'Paneer Butter Masala',
        description: 'Cottage cheese cubes in creamy tomato gravy',
        price: '₹280',
        image: '/images/paneer-butter-masala.jpg'
      },
      {
        name: 'Dal Makhani',
        description: 'Black lentils slow-cooked with cream and butter',
        price: '₹250',
        image: '/images/dal-makhani.jpg'
      },
      {
        name: 'Veg Biryani',
        description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices',
        price: '₹280',
        image: '/images/veg-biryani.jpg'
      }
    ],
    breads: [
      {
        name: 'Butter Naan',
        description: 'Soft leavened bread brushed with butter',
        price: '₹60',
        image: '/images/butter-naan.jpg'
      },
      {
        name: 'Garlic Roti',
        description: 'Whole wheat bread with roasted garlic',
        price: '₹50',
        image: '/images/garlic-roti.jpg'
      }
    ],
    desserts: [
      {
        name: 'Gulab Jamun',
        description: 'Deep-fried milk dumplings soaked in sugar syrup',
        price: '₹120',
        image: '/images/gulab-jamun.jpg'
      },
      {
        name: 'Rasmalai',
        description: 'Soft cottage cheese patties in sweetened, cardamom-flavored milk',
        price: '₹150',
        image: '/images/rasmalai.jpg'
      }
    ]
  };

  return (
    <MenuContainer>
      <MenuWrapper>
        <MenuTitle>Our Culinary Delights</MenuTitle>
        <TitleH2>Explore Our Menu</TitleH2>
        
        <MenuSection>
          <SectionTitle>Starters</SectionTitle>
          <DishGrid>
            {menuItems.starters.map((dish, index) => (
              <DishCard key={index}>
                <DishImage style={{ backgroundImage: `url(${dish.image})` }} />
                <DishInfo>
                  <DishName>{dish.name}</DishName>
                  <DishDescription>{dish.description}</DishDescription>
                  <DishPrice>{dish.price}</DishPrice>
                </DishInfo>
              </DishCard>
            ))}
          </DishGrid>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Main Course</SectionTitle>
          <DishGrid>
            {menuItems.mainCourse.map((dish, index) => (
              <DishCard key={index}>
                <DishImage style={{ backgroundImage: `url(${dish.image})` }} />
                <DishInfo>
                  <DishName>{dish.name}</DishName>
                  <DishDescription>{dish.description}</DishDescription>
                  <DishPrice>{dish.price}</DishPrice>
                </DishInfo>
              </DishCard>
            ))}
          </DishGrid>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Breads</SectionTitle>
          <DishGrid>
            {menuItems.breads.map((dish, index) => (
              <DishCard key={index}>
                <DishImage style={{ backgroundImage: `url(${dish.image})` }} />
                <DishInfo>
                  <DishName>{dish.name}</DishName>
                  <DishDescription>{dish.description}</DishDescription>
                  <DishPrice>{dish.price}</DishPrice>
                </DishInfo>
              </DishCard>
            ))}
          </DishGrid>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Desserts</SectionTitle>
          <DishGrid>
            {menuItems.desserts.map((dish, index) => (
              <DishCard key={index}>
                <DishImage style={{ backgroundImage: `url(${dish.image})` }} />
                <DishInfo>
                  <DishName>{dish.name}</DishName>
                  <DishDescription>{dish.description}</DishDescription>
                  <DishPrice>{dish.price}</DishPrice>
                </DishInfo>
              </DishCard>
            ))}
          </DishGrid>
        </MenuSection>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default Menu; 