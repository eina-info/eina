import pytest
from shared.domain.value_objects import Email


@pytest.fixture
def email_object(valid_email):
    return Email(valid_email)


@pytest.fixture
def valid_email():
    return "test@example.com"


@pytest.mark.parametrize("invalid_email", ["invalid-email", "test@", "@example.com", "test@.com", "test.com"])
def test_invalid_email_format(invalid_email):
    with pytest.raises(ValueError) as exc_info:
        Email(invalid_email)
    assert str(exc_info.value) == "Invalid email format"


@pytest.mark.parametrize("empty_input", ["", None])
def test_empty_email(empty_input):
    with pytest.raises(ValueError) as exc_info:
        Email(empty_input)
    assert str(exc_info.value) == "Email cannot be empty"


@pytest.mark.parametrize(
    "valid_email_input",
    ["test@example.com", "user@domain.co.uk", "firstname.lastname@company.org"],
)
def test_valid_email_creation(valid_email_input):
    email = Email(valid_email_input)
    assert str(email) == valid_email_input


def test_email_equality(valid_email):
    email1 = Email(valid_email)
    email2 = Email(valid_email)
    email3 = Email("different@example.com")

    assert email1 == email2
    assert email1 != email3
