package com.app.demo.healthEndpoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@RestController
public class helthController {

    @Autowired
    private DataSource dataSource; // Autowire your data source

    @Autowired
    private JdbcTemplate jdbcTemplate; // Autowire JdbcTemplate for executing SQL queries

    @GetMapping("/health")
    public ResponseEntity<String> checkHealth() {
        try (Connection connection = dataSource.getConnection()) {
            jdbcTemplate.queryForObject("SELECT 1", Integer.class); // Execute a simple query to test connectivity
            return ResponseEntity.ok("Database is up");
        } catch (SQLException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Database is down");
        }
    }
    @GetMapping("/wake-up")
    public ResponseEntity<String> wakeUpDatabase() {
        try {
            jdbcTemplate.queryForObject("SELECT 1", Integer.class); // Execute a simple query to wake up the database
            return ResponseEntity.ok("Database woke up successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to wake up the database");
        }
    }

}