package com.TermProject.finema.repository;

import com.TermProject.finema.entity.Order;
import com.TermProject.finema.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;
import java.time.LocalDate;
import com.TermProject.finema.entity.ConsecutiveTimes;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByUser(User user);

}