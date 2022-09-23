import { CartContainer } from "./style";
import { Stack, Radio, RadioGroup, Button } from "@chakra-ui/react";
import { useState } from "react";

export const CartPage = () => {
  const [cart, setCart] = useState(false);

  if (cart) {
    return (
      <CartContainer>
        <header>
          <h1>Meu carrinho</h1>
        </header>

        <div className="address">
          <p>Endereço de entrega</p>
          <p>Rua teste, 13</p>
        </div>
        <div className="title">
          <h2>Carrinho vazio</h2>
        </div>
        <div className="price-container">
          <div className="subtotal">
            <p>SUBTOTAL</p>
          </div>
          <div className="price">
            <p>Frete R$0,00</p>
            <p>R$00,00</p>
          </div>
        </div>
        <div className="payment-title">
          <p>Forma de pagamento</p>
        </div>
        <span className="line"></span>

        <RadioGroup width="85vw">
          <Stack direction="column">
            <Radio value="1">Dinheiro</Radio>
            <Radio value="2">Cartão de crédito</Radio>
          </Stack>
        </RadioGroup>
        <div className="submit-button">
          <Button
            type="submit"
            colorScheme="red"
            variant="solid"
            borderRadius="2px"
            height="2.625rem"
          >
            Confirmar
          </Button>
        </div>
      </CartContainer>
    );
  } else {
    return (
      <CartContainer>
        <header>
          <h1>Meu carrinho</h1>
        </header>
        <div className="address">
          <p>Endereço de entrega</p>
          <p>Rua teste, 13</p>
        </div>
        <div className="title">
          <h2>Carrinho cheio</h2>
        </div>
        <div className="price-container">
          <div className="subtotal">
            <p>SUBTOTAL</p>
          </div>
          <div className="price">
            <p>Frete R$0,00</p>
            <p>R$00,00</p>
          </div>
        </div>
        <div className="payment-title">
          <p>Forma de pagamento</p>
        </div>
        <span className="line"></span>

        <RadioGroup width="85vw">
          <Stack direction="column">
            <Radio value="1">Dinheiro</Radio>
            <Radio value="2">Cartão de crédito</Radio>
          </Stack>
        </RadioGroup>
        <div className="submit-button">
          <Button
            type="submit"
            colorScheme="red"
            variant="solid"
            borderRadius="2px"
            height="2.625rem"
          >
            Confirmar
          </Button>
        </div>
      </CartContainer>
    );
  }
};
