from lxml import etree

tree = etree.parse("roses_classification.xml")


def get_element():
    result = tree.xpath("/botanical-info/plant-information/plant-list/plant/plant-name/text()")
    return result


def get_attribute():
    result = tree.xpath(
        "/botanical-info/plant-information/plant-list/plant/plant-description[@value='plant4_description']/text()")
    return result


if __name__ == "__main__":
    print(get_element())
    print("")
    print(get_attribute())
