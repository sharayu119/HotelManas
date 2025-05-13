import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  padding: clamp(60px, 10vw, 100px) clamp(15px, 3vw, 20px) clamp(30px, 5vw, 50px);
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 80px 15px 30px;
  }
`;

const TitleH2 = styled.h2`
  text-align: center;
  font-family: 'Playfair Display', serif;
  color: #666;
  font-size: clamp(1.4rem, 3vw, 2rem);
  margin-bottom: clamp(1rem, 3vw, 2rem);

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

const MenuWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
`;

const MenuTitle = styled.h1`
  text-align: center;
  font-family: 'Playfair Display', serif;
  color: #333;
  margin-bottom: clamp(1.5rem, 4vw, 3rem);
  font-size: clamp(2rem, 5vw, 3rem);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const MenuSection = styled.div`
  margin-bottom: clamp(2rem, 5vw, 3rem);

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  color: #1a1a1a;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  text-align: center;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
  
  &::after {
    content: '';
    display: block;
    width: clamp(40px, 8vw, 60px);
    height: 3px;
    background-color: #ffd700;
    margin: clamp(8px, 2vw, 15px) auto 0;

    @media (max-width: 768px) {
      width: 50px;
      margin: 10px auto 0;
    }
  }
`;

const DishGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
  padding: 0 clamp(0.5rem, 2vw, 1rem);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 0;
  }
`;

const DishCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform-origin: center;

  @media (max-width: 768px) {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const DishImage = styled.div`
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;

  ${DishCard}:hover & {
    transform: scale(1.05);
  }
`;

const DishInfo = styled.div`
  padding: clamp(1rem, 2vw, 1.5rem);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const DishName = styled.h3`
  font-family: 'Playfair Display', serif;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const DishDescription = styled.p`
  color: #666;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  line-height: 1.5;
  flex-grow: 1;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
`;

const DishPrice = styled.span`
  color: #ffd700;
  font-weight: bold;
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  display: inline-block;
  padding: 0.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
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