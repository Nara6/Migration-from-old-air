public class Course {
    private String name;
    private String teachBy;
    private int duration;
    private String room;
    private String type;

    public Course(String name, String teachBy, int duration, String room, String type) {
        this.name = name;
        this.teachBy = teachBy;
        this.duration = duration;
        this.room = room;
        this.type = type;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTeachBy() {
        return this.teachBy;
    }

    public void setTeachBy(String teachBy) {
        this.teachBy = teachBy;
    }

    public int getDuration() {
        return this.duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getRoom() {
        return this.room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
