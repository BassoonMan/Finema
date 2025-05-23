package com.TermProject.finema.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generates the primary key value
    private int id;

    @ManyToOne
    @JoinColumn(name = "movie_id", nullable = false) // Foreign key for Movie
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Foreign key for User
    private User user;

    @Column(length = 5000)
    private String reviewText;

    private int rating;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}