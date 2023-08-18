module gic.itc {
    requires javafx.controls;
    requires javafx.fxml;

    opens gic.itc to javafx.fxml;
    exports gic.itc;
}
