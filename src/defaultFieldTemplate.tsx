import * as React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { FieldTemplateFunction } from './types'

const defaultFieldTemplate: FieldTemplateFunction = ({
  getLabel,
  defaultText,
  selectedItem,
  clear,
  containerStyle,
  textStyle,
  clearImage,
  validate
}) => (
  <View
    style={[
      {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
      },
      containerStyle
    ]}
  >
    <Text style={textStyle, { fontSize: (validate) ? 20: 11, alignItems: 'center', color: '#999999'}}>
      {(selectedItem && getLabel(selectedItem)) || defaultText}
    </Text>
    {selectedItem && (
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          padding: 12
        }}
        onPress={clear}
      >
        {clearImage || (
          <Image
            style={{ width: 16, height: 16 }}
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAArCAYAAAA65tviAAAACXBIWXMAAAsSAAALEgHS3X78AAACEklEQVRogdWZP07DMBSHf4SFlbEbnABuQI+A1L3iCLkB6Q3akY1mj0RvQG/Qih3RKSs9QZGrF5TIjv882038TSVWSz89/57N4+p0OkEwmc1zAM9Iix2AZV2VP2eRyWz+CeApMYmGI4DH67ev7ymAV2k5HW4A3GYApglLNNxltM9S5z8jQuYhYZn7jF7k0lI6rETXOovUVSm61jpBCdGxCvEiaz3MaSEl8roqfzsi9KBISGJbV+V780O7IkJmCeAgvWWcdHKdKb7ii/RkfKzrquwcG5IIBX8zYomjqstKIsSYg180AW+jFBF9WdwqpYXh2VOOJZQiJFOMMPjSlmroFTG9cQDWlF8lWpG6Kj9Ev5YWLs/RdMZpRYgxtOMl5bYXowh9wEJauBwHyqsWm4qAOthQwbfaEVYiA97DNrqAt7GtCOiCdungW3dNaxHXDw7AwhRwtghd1FbSQngOrjcL14qAshL7Hpar7lM6nEXoF8TcYls6iJ3gVKQJ/l5aCAPrAGaJEDGqsnIJeBu2SITJi/E+pcOnIgj8B5hzwNt4iQQ88TsTEQ6+FQk1efHOm7cI4XPVlyYiHIKIeExelBMRDqEqAmbwlRMRDsFEGJOX3okIh5AVcZ28BD1Qg4oQNl9QOxHhEFzEYvLidYL3EaMiMLRj40SEQxQRzeRlbzMR4RCrIk3whYzYZqIBiAtmnH+FA/gDcxbTqRL0HeUAAAAASUVORK5CYII='
            }}
          />
        )}
      </TouchableOpacity>
    )}
  </View>
)

export default defaultFieldTemplate
