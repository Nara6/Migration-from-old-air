package net.camalpha.learn.articlemanagement.repository.user.jdbc;

import net.camalpha.learn.articlemanagement.model.user.entity.UserEntity;
import org.springframework.jdbc.core.RowMapper;

public class UserJdbcMapper {

    public static RowMapper<UserEntity> userRowMapper() {
        return (_rs, _row) -> {
            UserEntity entity = new UserEntity();
            entity.setId(_rs.getInt("id"));
            entity.setName(_rs.getString("name"));
            entity.setSex(_rs.getString("sex"));
            entity.setAddress(_rs.getString("address"));
            entity.setPhone(_rs.getString("phone"));
            entity.setDateOfBirth(_rs.getTimestamp("date_of_birth").toLocalDateTime());
            return entity;
        };
    }
}
