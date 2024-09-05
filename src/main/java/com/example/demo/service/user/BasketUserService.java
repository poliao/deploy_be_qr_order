package com.example.demo.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.user.Basket_user;
import com.example.demo.repository.user.BasketUserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BasketUserService {

    @Autowired
    private BasketUserRepository basketUserRepository;

    public List<Basket_user> getAllBaskets() {
        return basketUserRepository.findAll();
    }

    public Optional<Basket_user> getBasketById(Long id) {
        return basketUserRepository.findById(id);
    }

    public Basket_user createBasket(Basket_user basket) {
        return basketUserRepository.save(basket);
    }

    public Optional<Basket_user> updateBasket(Long id, Basket_user basketDetails) {
        Optional<Basket_user> basketOptional = basketUserRepository.findById(id);
        if (basketOptional.isPresent()) {
            Basket_user basket = basketOptional.get();
            basket.setTable(basketDetails.getTable());
            basket.setMenuOrders(basketDetails.getMenuOrders());
            return Optional.of(basketUserRepository.save(basket));
        } else {
            return Optional.empty();
        }
    }

    public boolean deleteBasket(Long id) {
        if (basketUserRepository.existsById(id)) {
            basketUserRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
